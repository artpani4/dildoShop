import { useState } from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const fetching = async () => {
        setIsLoading(true);
        try {
            await callback();
        } catch (e) {
            setIsError(e);
        } finally {
        }
    };

    return [fetching, isLoading, isError];
};
