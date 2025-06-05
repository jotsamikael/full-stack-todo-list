module.exports = {
    components: {
        schemas: {

            Task: {
                type: 'object',
                properties: {
                    idTask: { type: 'integer' },
                    title: { type: 'string' },
                    description: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' }
                }
            }
            


        }
    }
};
