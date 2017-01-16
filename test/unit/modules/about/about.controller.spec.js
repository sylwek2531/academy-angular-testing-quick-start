describe('AboutCtrl', function ()
{
    'use strict';

    var aboutCtrl;
    var MessagesMock;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller,_Messages_)
    {
        MessagesMock= _Messages_;
        spyOn(MessagesMock, 'getMessage').and.callThrough();
        spyOn(MessagesMock, 'setMessage').and.callThrough();

        aboutCtrl = $controller('AboutCtrl', {Messages: MessagesMock});

    }));

    describe('initialization', function ()
    {
        it('should set title to \'About Page\'', function ()
        {
            expect(aboutCtrl.title).toBe('About Page');
        });
        it('should set body to \'This is the about page body\'', function ()
        {
            expect(aboutCtrl.body).toBe('This is the about page body');
        });
        it('should set newMessage to empty srtimbg', function ()
        {
            expect(aboutCtrl.newMessage).toBe('');
        });
    });

    describe('updateMessage', function ()
    {
        beforeEach(function ()
        {
            aboutCtrl.updateMessage('Ha ha ha');
        });
        it('should call Messages.setMessage', function ()
        {
            expect(MessagesMock.setMessage).toHaveBeenCalled();
        });
        it('should call Messages.setMessage with \'Ha ha ha\'', function ()
        {
            expect(MessagesMock.setMessage).toHaveBeenCalledWith('Ha ha ha');
        });
        it('should call Messages.getMessage', function ()
        {
            expect(MessagesMock.getMessage).toHaveBeenCalled();
        });
        it('should set newMessage to \'Ha ha ha\'', function ()
        {
            expect(aboutCtrl.newMessage).toBe('Ha ha ha');
        });
    });

});
