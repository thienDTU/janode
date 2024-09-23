const MEDIA_URI = process.env.MEDIA_URI;
const hostLostConnection = async (room) => {
    if(MEDIA_URI && room) {
      fetch(`${MEDIA_URI}/lives/eventHostDisconect`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            room,
          }),
  
      }).catch((error) => {
        console.error('Error:', error);
      }).then((response) => {
        console.log('Success:', response);
    });
    }
};
const getByStreamKey = async (room) => {
    if(room && MEDIA_URI) {
        try {
            const data = await fetch(`${MEDIA_URI}/lives/getByStreamKey/${room}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).catch((error) => {
                console.error('Error:', error);
            }).then( async (response) => {
                const data = await response.json();
                return data?.data;
            });
            return data.live;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
export { 
    hostLostConnection,
    getByStreamKey
};