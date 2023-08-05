const apiBase = process.env.REACT_APP_API_BASE;

export const functionsBase = () => {
	return `${apiBase}/.netlify/functions/api`
}

export const plants = () => {
	return `${functionsBase()}/plants`
}

