import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { removeReminder } from "../../actionCreator/ReminderActions";
import moment from 'moment';
import Styles from "./style.module.css";

class ListReminders extends Component {
    render() {
        let { reminders, removeReminder } = this.props;
        return (
            <Fragment>
                <ul className={` list-unstyled text-left my-3`}>
                    {reminders?.map((reminder, key) => {
                        return (<div key={key} className={Styles.listStyle}>
                            <div>
                                <li><strong>Note {key + 1} :</strong> {reminder.text}</li>
                                <li><strong>Time :</strong> {moment(new Date(reminder.date)).fromNow()}</li>
                            </div>
                            <div>
                                <li onClick={() => removeReminder(reminder.id)}><i className={`${Styles.deleteSt} fas fa-trash`}></i></li>
                            </div>
                        </div>)
                    })}
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps(reminders) {
    return { reminders }
}

export default connect(mapStateToProps, { removeReminder })(ListReminders);