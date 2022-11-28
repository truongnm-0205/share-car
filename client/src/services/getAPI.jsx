const baseURL = 'http://localhost:8081';

export function postToServer(url, bodyObject) {
	return new Promise((resolve, reject) =>
		fetch(baseURL + url, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'same-origin',
			body: JSON.stringify(bodyObject),
		})
			.then((response) => {
				if (response.status === 419) {
					alert('Your session is already expired because you are idle for too long. Page will automatic refesh.');
					window.location.reload();
				}
				if (response.ok) {
					const contentType = response.headers.get('content-type');
					if (contentType && contentType.indexOf('application/json') !== -1)
						response.json().then((json) => resolve(json));
					else response.text().then((text) => resolve(text));
				} else response.json().then((text) => reject(text));
			})
			.catch((err) => reject(err)),
	);
}

export function postToServerWithToken(url, bodyObject, token) {
	return new Promise((resolve, reject) =>
		fetch(baseURL + url, {
			method: 'post',
			headers: { 'Content-Type': 'application/json', token: `Bearer ${token}` },
			credentials: 'same-origin',
			body: JSON.stringify(bodyObject),
		})
			.then((response) => {
				if (response.status === 419) {
					alert('Your session is already expired because you are idle for too long. Page will automatic refesh.');
					window.location.reload();
				}
				if (response.ok) {
					const contentType = response.headers.get('content-type');
					if (contentType && contentType.indexOf('application/json') !== -1)
						response.json().then((json) => resolve(json));
					else response.text().then((text) => resolve(text));
				} else response.json().then((text) => reject(text));
			})
			.catch((err) => reject(err)),
	);
}
