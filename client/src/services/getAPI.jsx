const baseURL = 'http://localhost:8080';

export function postToServer(url, bodyObject) {
	return new Promise((resolve, reject) =>
		fetch(baseURL + url, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
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

export function postToServerWithToken(url ,bodyObject, token) {
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

export function callToServerWithTokenAndUserObject(method,url, userObject ,bodyObject, token) {
	return new Promise((resolve, reject) =>
		fetch(baseURL + url, {
			method: method,
			headers: { 'Content-Type': 'application/json', token: `Bearer ${token}` },
			credentials: 'same-origin',
			user: JSON.stringify(userObject),
			body: JSON.stringify(bodyObject),
		}).then((response) => {
				if (response.status === 419) {
					alert('Your session is already expired because you are idle for too long. Page will automatic refesh.');
					window.location.reload();
				}
				// if(response.status === 400) response.json().then((json) => resolve(json))
				if (response.ok) {
					const contentType = response.headers.get('content-type');
					if (contentType && contentType.indexOf('application/json') !== -1)
						response.json().then((json) => resolve(json));
					else response.json().then((json) => resolve(json));
				} else response.json().then((json) => reject(json));
			})
			.catch((err) => reject(err)),
	);
}
