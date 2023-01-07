import Header from "./Header";

import { HeaderStoreType } from "./HeaderContainer";

type HeaderApiType = {}
export type HeaderCommonType = HeaderStoreType & HeaderApiType

const HeaderApiContainer: React.FC<HeaderStoreType> = (props) => {

    return (
        <Header {...props}/>
    );
};

export default HeaderApiContainer;