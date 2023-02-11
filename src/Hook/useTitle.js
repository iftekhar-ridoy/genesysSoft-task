import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - genesys-software-intern-task`
    }, [title])
};

export default useTitle;