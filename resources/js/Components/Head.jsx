import { useEffect } from 'react';

export default function Head({ title, children }) {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);

    return null;
}
