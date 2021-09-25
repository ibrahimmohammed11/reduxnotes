import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addReminder, clearReminder } from "../../actionCreator/ReminderActions";
import img1 from "../../images/note-taking.png";
import ListReminders from "../ListReminders";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Styles from "./style.module.css";


class Home extends Component {
    state = {
        text: "",
        date: new Date(),
    }

    render() {
        let { addReminder, clearReminder } = this.props;
        let { text, date } = this.state;
        return (
            <Fragment>
                <div className="container">
                    <div className={Styles.notes}>
                        <img src={img1} alt="img1" className={Styles.imgSt} />
                        <h4 className="my-3 text-white">What should u do?</h4>
                        <input value={text} onChange={(e) => this.setState({ text: e.target.value })} type="text" placeholder="What should u do..?" className="form-control" />
                        <DatePicker
                            placeholderText="Enter Date"
                            value={date}
                            className={`${Styles.inpSt} form-control my-2`}
                            selected={date}
                            onChange={(date) => this.setState({ date: date })}
                            showTimeSelect
                            timeFormat="HH:mm"
                            dateFormat="MMMM d, yyyy, h:mm:aa"
                            timeCaption="time"
                        />
                        <button
                            onClick={() => {
                                addReminder(text, date)
                                this.setState({ text: "", date: "" }) // عشان افضي ال inputs
                            }}
                            className="btn btn-primary btn-block">
                            Add Reminder
                        </button>
                        <button onClick={clearReminder} className="btn btn-danger btn-block">Clear Reminder</button>

                        <ListReminders />
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default connect(null, { addReminder, clearReminder })(Home);