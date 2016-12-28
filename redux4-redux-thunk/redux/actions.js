export const addCounter = (text) => {
	return {
		type: 'INCREMENT',
		text
	}
};

export const reduceCounter = (text) => {
	return {
		type: 'DECREMENT',
		text
	}
}

const requestStatus = (isSuccess) => {
	return {
		type: 'REQUEST_STATUS',
		isSuccess
	}
}

const receivePosts = (info) => {
	return {
		type: 'RECEIVE_DATA',
		info
	}
}

const _requestUrl = 'https://mhjkm.1391.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=manhuadao&adgroupid=123';

export const fetchPosts = () => {
	return function (dispatch, getState) {
		return fetch(_requestUrl)
			.then((res) => res.json())
			.then((data) => {

				if(data.code === 200) {
					dispatch(requestStatus(true));

					const info = data.info;
					console.log(info);
					dispatch(receivePosts(info));
				}

			}).catch((error) => {
				dispatch(requestStatus(false));
				console.log('发生错误！', error);
			}); 

	};
}



