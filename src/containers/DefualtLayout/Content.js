import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import DashBoard  from '../../views/DashBoard'
import Widget  from '../../views/pages/Widget'
import TopNav from '../../views/pages/layout/TopNav'
import Fixed from '../../views/pages/layout/Fixed'
import Boxed from '../../views/pages/layout/Boxed'
import CollapsedSidebar from '../../views/pages/layout/CollapsedSidebar'
import ChartJs from '../../views/pages/charts/ChartJs'
import Morris from '../../views/pages/charts/Morris'
import Flot from '../../views/pages/charts/Flot'
import Inline from '../../views/pages/charts/Inline'
import General from '../../views/pages/ui/General'
import Icon from '../../views/pages/ui/Icon'
import Button from '../../views/pages/ui/Button'
import Slider from '../../views/pages/ui/Slider'
import Timeline from '../../views/pages/ui/Timeline'
import Modal from '../../views/pages/ui/Modal'
import GeneralForm from '../../views/pages/forms/GeneralForm'
import AdvancedForm from '../../views/pages/forms/AdvancedForm'
import EditorForm from '../../views/pages/forms/EditorForm'
import Calendar from '../../views/pages/Calendar'
import Mailbox from '../../views/pages/Mailbox'

export default class Content extends Component {

    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={DashBoard} />
                <Route exact path={"/dashboard"} component={DashBoard} />
                <Route exact path={"/pages/widget"} component={Widget} />
                <Route exact path={"/pages/calendar"} component={Calendar} />
                <Route exact path={"/pages/layout/topnav"} component={TopNav} />
                <Route exact path={"/pages/layout/fixed"} component={Fixed} />
                <Route exact path={"/pages/layout/boxed"} component={Boxed} />
                <Route exact path={"/pages/layout/collapsedsidebar"} component={CollapsedSidebar} />
                <Route exact path={"/pages/charts/chartjs"} component={ChartJs} />
                <Route exact path={"/pages/charts/morris"} component={Morris} />
                <Route exact path={"/pages/charts/flot"} component={Flot} />
                <Route exact path={"/pages/charts/inline"} component={Inline} />
                <Route exact path={"/pages/ui/general"} component={General} />
                <Route exact path={"/pages/ui/icons"} component={Icon} />
                <Route exact path={"/pages/ui/buttons"} component={Button} />
                <Route exact path={"/pages/ui/sliders"} component={Slider} />
                <Route exact path={"/pages/ui/timeline"} component={Timeline} />
                <Route exact path={"/pages/ui/modals"} component={Modal} />
                <Route exact path={"/pages/forms/general"} component={GeneralForm} />
                <Route exact path={"/pages/forms/advanced"} component={AdvancedForm} />
                <Route exact path={"/pages/forms/editors"} component={EditorForm} />
                <Route exact path={"/pages/mailbox/mailbox"} component={Mailbox} />
            </Switch>
        )
    }
    
}
