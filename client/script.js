Glue()
    .then((glue) => {
        window.glue = glue;
        return glue.agm.createStream("WSSPrices");
    })
    .then((stream) => {

        window.stream = stream;

        const socket = new WebSocket("ws://localhost:7777");

        socket.onopen = () => {
            console.log("I am open");
        };

        socket.onmessage = (msgEv) => {
            const price = msgEv.data;

            stream.push(JSON.parse(price));
        };

    })
    .catch(console.log);