module.exports = APIProvider => {
    describe('Test goOffline method', () => {
        test('goOffline method shall have property `success` = true', async () => {

            let response = await APIProvider.v2.goOffline();
            expect(response).not.toEqual(null);
            expect(response).toHaveProperty('success');
            expect(response.success).toEqual(true);

        });
    });
};