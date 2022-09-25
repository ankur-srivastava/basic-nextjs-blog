import { Fragment } from "react"
import MainNavigationComponent from "./MainNavigation"

const LayoutComponent = (props) => {
    return <Fragment>
        <MainNavigationComponent />
        <main>
            {props.children}
        </main>
    </Fragment>
}

export default LayoutComponent
