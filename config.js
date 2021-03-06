export const defaultCompactPx = 800;

export const gaMeasurementId = `UA-96179028-7`;

export const firebaseConfig = {
	apiKey: "AIzaSyAeptLYIAEF7MtzFjKo0XYtC6i0BXbqdjI",
	authDomain: "web-skills.firebaseapp.com",
	databaseURL: "https://web-skills.firebaseio.com",
	projectId: "web-skills",
	storageBucket: "web-skills.appspot.com",
	messagingSenderId: "796050122198",
	appId: "1:796050122198:web:422fd7fee1037c3a2a3077"
};

export const lazyImgIntersectionObserverOptions = {
	rootMargin: '200px',
	// [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09]
	threshold: Array(10).fill(0).map((_, i) => (i * 1) / 100)
};

export const getShareConfig = () => ({
	title: "Web Skills",
	text: "A visual overview of useful skills to learn as a web developer",
	url: `${window.location.origin}${location.pathname}`
});