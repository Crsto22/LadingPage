import { useCallback, useEffect, useState } from 'react';
import {
	DEFAULT_LANGUAGE,
	LANGUAGE_CHANGE_EVENT,
	LANGUAGE_STORAGE_KEY,
	getStoredLanguage,
	setStoredLanguage,
	translate,
} from './translations.js';

export function useLanguage() {
	const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

	useEffect(() => {
		setLanguageState(getStoredLanguage());

		const handleLanguageChange = (event) => {
			if (event.detail?.language) setLanguageState(event.detail.language);
		};

		const handleStorage = (event) => {
			if (event.key === LANGUAGE_STORAGE_KEY) setLanguageState(getStoredLanguage());
		};

		window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
		window.addEventListener('storage', handleStorage);

		return () => {
			window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
			window.removeEventListener('storage', handleStorage);
		};
	}, []);

	const setLanguage = useCallback((nextLanguage) => {
		setLanguageState(setStoredLanguage(nextLanguage));
	}, []);

	const t = useCallback((key, fallback) => translate(language, key, fallback), [language]);

	return { language, setLanguage, t };
}
