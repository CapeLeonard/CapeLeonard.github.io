class TestBlock {
    getInfo () {
        return {
            id: 'griffpatch',
            name: formatMessage({
                id: 'griffpatch.categoryName',
                default: 'Griffpatch',
                description: 'Label for the Griffpatch extension category'
            }),
            menuIconURI: menuIconURI,
            blockIconURI: blockIconURI,
            blocks: [
                {
                    opcode: 'doTest',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'griffpatch.test',
                        default: 'test [x], [y]',
                        description: 'test this block'
                    }),
                    arguments: {
                        x: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    }
                },
                {
                    opcode: 'getTest',
                    text: formatMessage({
                        id: 'griffpatch.getTest',
                        default: 'test',
                        description: 'get the test value'
                    }),
                    blockType: BlockType.REPORTER
                }
            ]
        };
    }
}

module.exports = TestBlock;