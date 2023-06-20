import React, { useState } from 'react'
import { Formik } from "formik";
import { H2 } from "src/components";
import { icons } from "src/helpers";
import { Container, BrowseFile } from './AddVideoComp';
import {
    FormRow,
    Heading,
    ButtonOne,
    ButtonTwo,
    SIDEBAR,
    ImageBrowse,
    BrowseBtn,
} from "../AddInstructor/AddInstructorComp";
import {
    FieldInput,
    DropDownInput,
    TextArea,
} from "src/components/AdminInput/AdminInput";
import { addVideoValidate } from 'src/helpers/forms/AdminValidateForm';


const AddVideo = () => {
    const initialValues = {
        category: "",
        date: "",
        title: "",
        trainer: "",
        difficulty: "",
        intensity: "",
        filter: "",
        totalTime: "",
        feature: "",
        time: "",
        image: "",
        description: "",
    };
    const handleSubmit = () => { };
    const options = [
        { value: 'Yoga', label: 'Yoga' },
        { value: 'saab', label: 'Saab' },
        { value: 'mercedes', label: 'Mercedes' },
        { value: 'audi', label: 'Audi' },
    ];

    const [fileName, setFileName] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Do something with the uploaded file
        console.log(file);
        setFileName(file.name);

    };
    return (
        <React.Fragment>
            <Container>
                <SIDEBAR>SideBar</SIDEBAR>
                <Formik
                    initialValues={initialValues}
                    validationSchema={addVideoValidate}
                    // validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <form>
                        <Heading>
                            <H2>Add New Video</H2>

                            <label htmlFor="upload-button">
                                Upload File
                                <input
                                    id="upload-button"
                                    type="file"
                                    onChange={handleFileUpload}
                                    style={{ display: 'none' }}
                                />
                            </label>
                            {fileName && <p> {fileName}</p>}

                        </Heading>
                        <FormRow>

                            <DropDownInput
                                label="Category"
                                id="category"
                                autofill
                                name="category"
                                type="text"
                                placeholder="Yoga"
                                style={{ fontSize: "16px" }}
                                options={options}
                            />
                            <FieldInput
                                label="Date"
                                id="date"
                                autofill
                                name="date"
                                type="text"
                                placeholder="dd/mm/yy"
                                style={{ fontSize: "16px" }}
                            />
                        </FormRow>
                        <FormRow>
                            <FieldInput
                                label="Title"
                                id="title"
                                autofill
                                name="title"
                                type="text"
                                placeholder="Live Back Press"
                                style={{ fontSize: "16px" }}
                            />
                            <DropDownInput
                                label="Trainer"
                                id="trainer"
                                autofill
                                name="trainer"
                                type="text"
                                placeholder="Elizabeth Lisa"
                                style={{ fontSize: "16px" }}
                                options={options}
                            />
                        </FormRow>
                        <FormRow>
                            <DropDownInput
                                label="Difficulty"
                                id="difficulty"
                                autofill
                                name="difficulty"
                                type="text"
                                placeholder="Medium"
                                style={{ fontSize: "16px" }}
                                options={options}
                            />
                            <DropDownInput
                                label="Intensity"
                                id="intensity"
                                autofill
                                name="intensity"
                                type="text"
                                placeholder="Level 1"
                                style={{ fontSize: "16px" }}
                                options={options}
                            />
                        </FormRow>
                        <FormRow>
                            <DropDownInput
                                label="Filter"
                                id="filter"
                                autofill
                                name="filter"
                                type="text"
                                placeholder="Core"
                                style={{ fontSize: "16px" }}
                                options={options}
                            />
                            <FieldInput
                                label="Total Time"
                                id="totalTime"
                                autofill
                                name="totalTime"
                                type="text"
                                placeholder="30 Mins"
                                style={{ fontSize: "16px" }}
                            />
                        </FormRow>
                        <FormRow>
                            <DropDownInput
                                label="You Want to Feature this Video?"
                                id="feature"
                                autofill
                                name="feature"
                                type="text"
                                placeholder="Yes"
                                style={{ fontSize: "16px" }}
                                options={options}
                            />
                            <DropDownInput
                                label="Upload video thumbnail"
                                id="thumbnail"
                                autofill
                                name="thumbnail"
                                type="thumbnail"
                                placeholder="Select"
                                style={{ fontSize: "16px" }}
                                options={options}
                            />

                        </FormRow>
                        <FormRow>
                            <TextArea
                                label="Decription"
                                id="Decription"
                                autofill
                                name="Time"
                                type="Tiem"
                                placeholder="Description"
                                style={{ fontSize: "16px" }}
                            />
                        </FormRow>
                        <FormRow>
                            <ButtonOne>CANCEL</ButtonOne>
                            <ButtonTwo>SAVE</ButtonTwo>
                        </FormRow>
                    </form>
                </Formik>

                <BrowseFile>
                    <ImageBrowse>
                        <img src={icons.upload} alt="upload" />
                    </ImageBrowse>
                    <BrowseBtn>
                        <input
                            type="file"
                            id="myFile"
                            // value={AddInstructorContent.btnBrowse}
                            className="input"
                        />
                    </BrowseBtn>
                </BrowseFile>
            </Container>
        </React.Fragment>
    )
}

export default AddVideo