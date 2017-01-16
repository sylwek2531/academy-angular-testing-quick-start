describe('ContactCtrl', function ()
{
    'use strict';

    var contactsCtrl;
    var ContactServiceMock;
    var contacts;

    contacts = [{
        name: 'John',
        email: 'john@john.pl',
        phone: '123456789'
    }, {
        name: 'Jack',
        email: 'jack@jack.pl',
        phone: '987654321'
    }];
    beforeEach(module('app'));

    beforeEach(inject(function ($controller, _ContactService_)
    {
        ContactServiceMock = _ContactService_;
        sinon.spy(ContactServiceMock, 'list');
        sinon.spy(ContactServiceMock, 'save');
        sinon.spy(ContactServiceMock, 'delete');
        sinon.stub(ContactServiceMock, 'get').returns(contacts[1]);
        contactsCtrl = $controller('ContactController', {ContactService: ContactServiceMock});
    }));

    describe('initialization', function ()
    {
        it('should set newContact', function ()
        {
            expect(contactsCtrl.newContact).to.eql(contacts[0]);
        });
        it('should call ContactService.list', function ()
        {
            expect(ContactServiceMock.list).to.have.been.called;
        });
        it('should call ContactService.list only once', function ()
        {
            expect(ContactServiceMock.list).callCount(1);
        });
    });

    describe('saveContact', function ()
    {
        beforeEach(function ()
        {
            contactsCtrl.saveContact();
        });
        it('should call ContactService.save', function ()
        {
            expect(ContactServiceMock.save).to.have.been.called;
        });
        it('should call ContactService.save with new contact data', function ()
        {
            expect(ContactServiceMock.save).to.have.been.calledWith({ email: "john@john.pl", name: "John", phone: "123456789" });
        });
        it('should clear newContact object', function ()
        {
            expect(contactsCtrl.newContact).to.eql({});
        });
    });

    describe('deleteContact', function ()
    {
        beforeEach(function ()
        {
            contactsCtrl.deleteContact(1);
        });
        it('should call ContactService.delete', function ()
        {
            expect(ContactServiceMock.delete).to.have.been.called;
        });
        it('should call ContactService.delete with contact id', function ()
        {
            expect(ContactServiceMock.delete).to.have.been.calledWith(1);
        });

    });
    describe('editContact', function ()
    {
        beforeEach(function ()
        {
            contactsCtrl.editContact(12);
        });

        it('should call ContactService.get', function ()
        {
            expect(ContactServiceMock.get).to.have.been.called;
        });
        it('should call ContactService.get with contact id', function ()
        {
            expect(ContactServiceMock.get).to.have.been.calledWith(12);
        });
        it('should set newContact to edited contact data', function ()
        {
            expect(contactsCtrl.newContact).to.eql(contacts[1]);
        });

    });
});
