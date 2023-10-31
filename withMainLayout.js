import React from "react";
import Header from "../component/Header";

export default function withMainLayout(Component) {

    function layout(props) {
        return (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9 col-lg-2 p-0">
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return layout;
}