describe('AboutCtrl', function ()
{
    'use strict';
    var message;
    var aboutCtrl;
    var MessagesMock;
    beforeEach(module('app'));
    beforeEach(inject(function ($controller, _Messages_)
    {
        message = 'Witaj w pliku about.html';
        MessagesMock = _Messages_;
        aboutCtrl = $controller('AboutCtrl', {Messages: MessagesMock});
        spyOn(MessagesMock, 'setMessage').and.callThrough();
        spyOn(MessagesMock, 'getMessage').and.callThrough();
    }));
    describe('initialization', function ()
    {
        it("should return 'About Page'", function ()
        {
            expect(aboutCtrl.title).toEqual('About Page');
        });
        it("should return 'This is the about page body'", function ()
        {
            expect(aboutCtrl.body).toEqual('This is the about page body');
        });
        it('should set about newMessage', function ()
        {
            expect(aboutCtrl.newMessage).toEqual('');
        });
    });


    describe('updateMessage', function ()
    {
        beforeEach(function ()
        {
            aboutCtrl.updateMessage(message);
        });
        it('should call Messages.updateMessage', function ()
        {
            expect(MessagesMock.setMessage).toHaveBeenCalled();
        });
        it('should call Messages.setMessage with Hello Message', function ()
        {
            expect(MessagesMock.setMessage).toHaveBeenCalledWith(message);
        });
        it('should set NewMessage', function ()
        {
            expect(aboutCtrl.newMessage).toEqual(message);
        });
    });

});
