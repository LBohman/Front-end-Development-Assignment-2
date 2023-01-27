import { createHeaders } from "./index";

const apiUrl = process.env.REACT_APP_API_URL;

const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`);
        if (!response.ok) {
            throw new Error('Could not complete request.');
        }
        const data = await response.json();
        return [null, data];
    }
    catch (error) {
        return [ error.message, [] ];
    }
}

// Needs authentication to create resources in the database
const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST', // Create a resource
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        });
        if (!response.ok) {
            throw new Error('Could not create username ' + username);
        }
        const data = await response.json();
        return [null, data];
    }
    catch (error) {
        return [ error.message, [] ];
    }
}

// This component is always going to expect an error or a user, [ error, user ]
export const loginUser = async (username) => {
    const [ checkError, user ] = await checkForUser(username);

    // if something went wrong return an error message so the component knows about it
    if (checkError !== null) {
        return [checkError, null]
    }

    // if nothing went wrong find the existing user
    if (user.length > 0) {
        return [ null, user.pop() ]
    }

    // creates a new user
    return  await createUser(username);
}

export const saveTranslation = async (user, translation) => {
    try {
        const response = await fetch((`${apiUrl}/${user.id}`), {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })
        if (!response.ok) {
            throw new Error('Could not save the translation');
        }
        const data = await response.json();
        return [null, data];
    }
    catch (error) {
        return [ error.message, null];
    }
}

export const userById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`);
        if (!response.ok) {
            throw new Error("Could not fetch user");
        }
        const user = await response.json();
        return [null, user];
    }
    catch (error) {
        return [ error.message, null ];
    }
}

export const clearUserHistory = async (user) => {
    try {
        const response = await fetch((`${apiUrl}/${user.id}`), {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        });
        if (!response.ok) {
            throw new Error('Could not clear history');
        }
        const result = await response.json();
        return [null, result];
    }
    catch (error) {
        return [ error.message, null];
    }
}