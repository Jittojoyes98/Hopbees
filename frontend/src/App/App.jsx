import React from "react";
import "@/_styles/theme.scss"
import { Layout } from "../_layout";
import { Button } from "react-bootstrap";

const App=()=>{
    return (
        <Layout>
            {/* add routes here */}
        <Button variant="primary">Primary</Button>{' '}
        </Layout>
    )
}

export default App;