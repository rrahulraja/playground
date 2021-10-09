const SQS = require('aws-sdk').SQS
const promisify = require('util').promisify

var sqs = new SQS({region: 'ap-south-1'})
sqs.sendMessage = promisify(sqs.sendMessage)

const connectorQueueUrl = "http://localhost:4566/000000000000/stage-sigo-connector-queue.fifo"


const sendUnlock = () => {
    const payload = {
        deviceId: '',
        code: 'UNLOCK',
        data: {
            pileId: '1121920001017',
            minBattery: '80'
        },
        event: 'SITE_PILE_UNLOCK'
    }

    const params = {
        MessageBody: JSON.stringify(payload),
        QueueUrl: connectorQueueUrl
    }

    sqs.sendMessage(params).then(data => console.log(data)).catch(err => console.error(err))
}

const sendBikeState = () => {
    const payload = {
        deviceId: '8601841000922',
        code: 'LOCATION',
        data: {
            latitude: '51.45582',
            longitude: '7.2675686'
        },
        event: 'BIKE_STATE'
    }

    const params = {
        MessageBody: JSON.stringify(payload),
        QueueUrl: connectorQueueUrl
    }

    sqs.sendMessage(params).then(data => console.log(data)).catch(err => console.error(err))
}

const sendBikeReturn = () => {
    const payload = {
        deviceId: '2601816000700',
        code: 'SUCCESS',
        data: {
            bikeId: '2601816000700',
            pileId: '1121920001019'
        },
        event: 'SITE_BIKE_RETURN'
    }

    const params = {
        MessageBody: JSON.stringify(payload),
        QueueUrl: connectorQueueUrl
    }

    sqs.sendMessage(params).then(data => console.log(data)).catch(err => console.error(err))
}


// sendUnlock();
// sendBikeState()
sendBikeReturn()