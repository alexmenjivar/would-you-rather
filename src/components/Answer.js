import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Button, Form } from "antd";


class Answer extends Component {
    render() {
        const { answerId, questions, authedUser, users } = this.props;
        return (
            <Form style={{ display: "flex", justifyContent: "center"}}>
                <Card title={`${users[authedUser].name} asks:`} bordered={true} style={{ width: 500 }} type="inner">
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar src={users[authedUser].avatarURL} size={128} />
                        </div>
                        <div style={{ marginLeft: 20 }}>
                            <div style={{ fontWeight: 'bold' }}>Would you rather</div>
                            <div>OPtions here...</div>
                            <br />
                            <Button block>View Poll</Button>
                        </div>
                    </div>
                </Card>
            </Form>

        );
    }
}

function mapStateToProps({ authedUser, questions, users }) {
    const userQuestions = Object.keys(users[authedUser].questions)

    return {
        authedUser,
        questions,
        users
    };
}

export default connect(mapStateToProps)(Answer);