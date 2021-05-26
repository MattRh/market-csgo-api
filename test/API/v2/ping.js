module.exports = APIProvider => {
    describe('Test ping method', () => {
        test('With no args response shall have property `success` = true', async () => {

            let response = await APIProvider.v2.ping();
            expect(response).not.toEqual(null);
            expect(response).toHaveProperty('success');
            expect(response.success).toEqual(true);
        });
    });
};
