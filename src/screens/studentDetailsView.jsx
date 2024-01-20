import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Loading from "../components/loader";
import Message from "../components/message";
import {
  getStudentDetails,
  updateStudent,
  deleteStudent,
} from "../actions/studentActions";
import { STUDENT_UPDATE_RESET } from "../constants/studentConstant";
const StudentDetailsView = ({ match, history }) => {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const studentDetails = useSelector((state) => state.studentDetails);
  const { loading, error, student } = studentDetails;
  const studentUpdate = useSelector((state) => state.studentUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = studentUpdate;
  const studentDelete = useSelector((state) => state.studentDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = studentDelete;

  useEffect(() => {
    if (successDelete) {
      history.push("/");
    }
    if (successUpdate) {
      dispatch({ type: STUDENT_UPDATE_RESET });
    }
    if (!student || !student._id || student._id !== match.params.id) {
      dispatch(getStudentDetails(match.params.id));
    }
    if (student && student._id && !status) {
      setStatus(student.status);
    }
  }, [dispatch, match, successUpdate, successDelete]);

  const navigateToEdit = () => {
    history.push({
      pathname: `/student/edit/${student._id}`,
      state: { studentProps: student },
    });
  };
  const updateStatus = () => {
    student.status = status;
    dispatch(updateStudent(student));
  };

  const deleteStuden = () => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteStudent(student._id));
    }
  };
  return (
    <>
      <Link className="btn btn-light" to="/">
        Go Back
      </Link>
    
      {loading || loadingUpdate || loadingDelete ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
          {errorDelete && <Message variant="danger">{errorDelete}</Message>}
          {student && (
            <Row>
              <Col md={3} className="mt-1">
                <Image src={student.image} alt={student.name} fluid  />
              </Col>
              <Col md={9} className="mt-3">
                <Card>
                  <ListGroup variant="flush">

                    <ListGroup.Item>
                      <h3>{student.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Phone No</Col>
                        <Col>{student.contact}</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Father Contact</Col>
                        <Col>{student.fatherContact}</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>City</Col>
                        <Col>{student.city}</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Address</Col>
                        <Col>{student.address}</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Room No</Col>
                        <Col> {student.roomNo}</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Block No</Col>
                        <Col> {student.blockNo}</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Status</Col>
                        <Col>
                          <Form.Control
                            size="sm"
                            as="select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                          >
                            {["Hostel", "Outside", "Home"].map((x) => (
                              <option key={x} value={x}>
                                {x}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Button
                       className="btn btn-success ml-4 my-3"
                        onClick={updateStatus}
                      >
                        <span>
                        <i class="fas fa-edit"> </i>
                        Update
                        </span>
                      </Button>
                      <Button className="btn btn-dark ml-4 my-3" onClick={navigateToEdit} >
                        <span>
                          <i className="fas fa-edit"> </i> Edit
                        </span>
                      </Button>
                      <Button className="btn btn-danger  ml-4 my-3" onClick={deleteStuden}>
                        <span>
                          <i className="fas fa-trash"> </i> Delete
                        </span>
                      </Button>

                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>

            </Row>
          )}
        </>
      )}
    </>
  );
};

export default StudentDetailsView;
