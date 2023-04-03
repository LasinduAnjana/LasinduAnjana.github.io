import React, {useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import './authPage.css'
import LoginForm from "./loginSection/loginForm";
import RegisterForm from "./loginSection/registerForm";

const Authpage = () => {
        const [tabIndex, setTabIndex] = useState(0);

    return (
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 align-items-center authContainer">
                        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                            <TabList>
                                <Tab>Log in</Tab>
                                <Tab>Register</Tab>
                            </TabList>
                            <TabPanel className='authTabs' >
                                <LoginForm />
                            </TabPanel>

                            <TabPanel className='authTabs'>
                                <RegisterForm />
                            </TabPanel>
                        </Tabs>
                    </div>
                    <div className='col-lg-6 col-sm-12 socialAuths'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet atque, commodi corporis culpa cumque dignissimos, dolore doloremque eligendi error est eum harum hic impedit inventore ipsum, labore magnam minima necessitatibus nihil nobis pariatur quo repellat sit tempora temporibus ullam voluptatibus? Eum, harum velit! Consequatur eveniet ex expedita minus necessitatibus quam repellat sint tempora temporibus voluptatum. Architecto eos ex explicabo fugit necessitatibus sequi, temporibus ullam voluptate? Doloremque dolores error fuga, magnam nemo odio optio praesentium reprehenderit temporibus! Consequuntur corporis cupiditate eum explicabo nostrum omnis perspiciatis velit, voluptas? Ab aliquid dignissimos dolor ex explicabo inventore laboriosam pariatur possimus veritatis vitae? A aspernatur culpa debitis dicta et eveniet explicabo hic illo impedit, in nisi nobis non numquam officiis provident quas quasi ratione repellendus saepe sed sit, ut vel velit? Culpa cupiditate ducimus enim ex id illum libero magni pariatur. Ab aspernatur eum officiis optio provident repellat veritatis voluptate voluptatem. Dolorum est, id magnam maiores nisi omnis possimus repellat saepe suscipit? A ab aliquam assumenda consequuntur cum cumque deserunt dignissimos error est facere fugit hic illo in labore maxime, molestias neque, nisi officia quam quas qui quibusdam, quidem sapiente tempore totam ullam vel veniam veritatis vero voluptate. Consequatur expedita nihil unde. Accusamus cumque debitis deserunt enim exercitationem facere iste laborum nemo neque nisi nostrum odit optio placeat, ratione, sapiente tempore tenetur ut vitae. Consequuntur cum inventore maxime nesciunt non possimus repudiandae voluptatum! Accusamus accusantium adipisci asperiores autem cum deleniti dignissimos distinctio dolore ducimus eaque eligendi, et eum facilis fuga iste libero maxime modi molestias officiis porro possimus quaerat quasi, quia, quo quod reprehenderit tenetur totam vel vero voluptates. Aliquam assumenda dolor et exercitationem provident soluta unde. Accusamus animi architecto aspernatur at culpa dicta dignissimos dolor dolorum ducimus eius hic illo illum iusto laboriosam molestiae nam, natus necessitatibus nemo nobis quae quam quia quis quod rem sed sit soluta sunt totam velit veniam. A aliquid cupiditate id provident quidem! Aliquam beatae commodi cupiditate delectus dicta dignissimos, dolore dolores enim eos eum facere fugit illo, nam possimus quam quis, recusandae sit unde veritatis vitae! Corporis dicta enim et eveniet ex labore laboriosam laudantium molestiae, necessitatibus nobis, placeat porro repudiandae vero? Doloribus harum nemo quas. Accusantium ad animi asperiores atque commodi consequatur cupiditate dicta doloremque dolores dolorum eius est, eveniet harum illum ipsam ipsum labore laboriosam minima molestiae, mollitia nam nobis, odio perferendis quas quia recusandae saepe similique sit sunt totam vel velit vero voluptatum? Ad adipisci beatae consectetur cupiditate delectus dignissimos dolorem dolorum ducimus eaque enim error et eum ex fugit in, ipsa iure laborum libero maxime neque nisi nulla odio quam quas quis quisquam rem saepe sit tempora voluptatem. Architecto beatae consequatur facere iure magni minus natus, nulla numquam, odio possimus quibusdam rerum sed sit sunt veritatis! Accusantium aliquid, deleniti dolorem fuga harum in inventore magni maxime odio quaerat qui repellat? Cum dolores hic itaque iure libero nemo non quia. A accusantium autem deleniti deserunt, ea, eligendi ex ipsam iure iusto maxime possimus quia quibusdam rerum similique tempore totam voluptatibus. Blanditiis dolore eos iure!</p>
                    </div>
                    <hr/>
                </div>
            </div>
        );
    // }
}

export default Authpage;