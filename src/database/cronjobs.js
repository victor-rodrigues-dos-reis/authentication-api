const { Op } = require('sequelize');
const schedule = require('node-schedule');
const moment = require('moment');
const TokenBlackList = require('../models/TokenBlackList');

async function deleteOldTokens() {
    // Executa a função no dia 1 de todos os meses
    const job = schedule.scheduleJob('* * * 1 * *', async function(){
        // remove todo token antigos
        await TokenBlackList.destroy({
            where: {
                createdAt: {
                [Op.lt]: moment().subtract(process.env.TOKEN_EXPIRES_IN, 'seconds').toDate()
            }
            }
        });
    });
}

module.exports = {
    async run() {
        deleteOldTokens();
    }
};