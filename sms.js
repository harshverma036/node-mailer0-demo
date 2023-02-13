var axios = require('axios');
var data = JSON.stringify({
    "Account": {
        "APIkey": "Edgnxry8UUCqd0EiBfzUpA",
        "SenderId": "NHCDCO",
        "Channel": "2",
        "DCS": "0",
        "SchedTime": null,
        "GroupId": null
    },
    "Messages": [{
        // "Text": "Dear Parent, your appointment has been confirmed at New Horizons Child Development Centre on {#var#} at {#var#}. Any queries Call: {#var#} {#var#} - Regards New Horizons",
        "Text": "Dear Parent, your appointment has been confirmed at New Horizons Child Development Centre on 17/02/2023 06:00 PM-06:30 PM at https://us06web.zoom.us/j/86865713696?pwd=MUZHU1IvNnQwY0JVUDdHbk9ZV1lCdz09. Any queries Call: 98678 55964 - Regards New Horizons",
        // "Text": "Dear Parent, your appointment has been confirmed at New Horizons Child Development Centre on 28/1/2020-2PM at ZoomLink. Any queries Call: 98678 55964 - Regards New Horizons",
        "DLTTemplateId": "1207162494278259759",
        // "Number": "9870801700"
        "Number": "9102768539"
    }
    ]
});

var config = {
    method: 'post',
    url: 'https://www.smsgatewayhub.com/api/mt/SendSMS',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });