const url = 'http://tannerv.ddns.net:3000/api'
const makeRequest = ({ url, data }) => {
    return new Promise(function (resolve, reject) {
        fetch(url, data)
            .then(response => {
                response.json().then(data => {
                    if (response.status >= 300) {
                        reject(data.message);
                    }
                    resolve(data);
                });
            })
            .catch(e => {
                reject(Error(e));
            });
    });
}
export const fetchArtists = () => makeRequest({
    url: `${url}/artists`,
    data: {
        method: 'GET'
    }
})

export const fetchArtist = (artist) => makeRequest({
    url: `${url}/artist/${artist}`,
    data: {
        method: 'GET'
    }
})

export const fetchAlbum = (album) => makeRequest({
    url: `${url}/album/${album}`,
    data: {
        method: 'GET'
    }
})