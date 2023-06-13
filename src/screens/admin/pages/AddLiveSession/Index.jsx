import React from 'react'
import { Formik } from 'formik'
import { H2 } from 'src/components'
import { FormRow, Container, Heading } from '../AddInstructor/AddInstructorComp'
import { FieldInput } from 'src/components/AdminInput/AdminInput'
import { Addlivesession } from './content'

const AddLiveSession = () => {

    const initialValues = {
        FirstName: 'Alexa',
        lastName: 'Morgan',
        EmailAddress: 'Alexa Morgan@,com',
        PhoneNo: '#########',
        JobTitle: 'Yoga Instructor',
        PremiumInstructor: 'Alex',
    };
    const handleSubmit = () => {

    }
    return (
        <React.Fragment>
            <Container>
                <Formik
                    initialValues={initialValues}
                    // validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <form>
                        <Heading>
                            <H2>{Addlivesession.heading}</H2>
                        </Heading>
                        <FormRow>
                            <FieldInput
                                label={Addlivesession.date}
                                id="loginEmail"
                                autofill
                                name="email"
                                type="email"
                                placeholder={Addlivesession.dateplace}
                                style={{ fontSize: "16px" }}
                            />
                        </FormRow>

                    </form>
                </Formik>
            </Container>
        </React.Fragment>
    )
}

export default AddLiveSession