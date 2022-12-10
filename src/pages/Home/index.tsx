/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { getDemoService } from "services/demo";
import { useQuery } from "@tanstack/react-query";


const Home: React.FC = () => {
    const { data: dataDemo, isLoading: categoryLoading } = useQuery(["getCategoriesHome"], () =>
        getDemoService(),
    );

    return (
        <div className='pages-home'>
         
            <section className='' />
        </div>
    );
};

export default Home;
