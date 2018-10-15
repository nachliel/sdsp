'use strict';

/**
 * Start the engine.
 * on failure exit - return 0;
 * on bid - return object to send;
 * on unbid - return 2;
 * @param {String} text 
 */
function main(text) {
    // Convert Message & Validate:
    sspMessage = postToJSON(text);
    if (sspMessage === 0)   // On failure of validation.
        return 0;
    // 20% chance of response. 
    if (Math.floor(getRandomBid(0,10)) > 8) {
        return 2;
    }
    //Bid!
    message = {
        id : sspMessage.id,
        bid: getRandomBid(sspMessage.bidfloor,sspMessage.bidfloor*2)
    }
    return message;
}

function getRandomBid(min, max) {
    return min + Math.random() * max;
}
/*
JSON SSP Message:
{
    "id": "1f56de9f-82c3-4076-83b5-69b9cde90cd4",
    "app": "Tinder",
    "bidfloor": "0.2",
    "cc": "GBR"
}
*/
/**
 * Converts the POST to JSON object, verify that it has complete needed parmeters.
 * @param {String} text Post SSP message.
 */
function postToJSON(text) {
    try {
        const jsonObject = JSON.parse(text);
    }
    catch {
        return 0;
    }
    let flag = ture;
    // Check parmeters:
    if (!jsonObject.hasOwnProperty('id'))
        return 0;
    if (!jsonObject.hasOwnProperty('app'))
        return 0;
    if (!jsonObject.hasOwnProperty('bidfloor'))
        return 0;
    if (!jsonObject.hasOwnProperty('cc'))
        return 0;

    return jsonObject;
}

module.exports = {
    postToJSON : postToJSON,
    main : main
};