import React from "react";

function AboutUs (){
    return (
        <div style={{lineHeight : 3, padding: 20}}>
                <h2>Hello, and welcome to Track!</h2>
                <p>
                    Track is a habit tracker app made by a small development team from CTH.
                    Our goal with the project has been to make an accessible app where the
                    user can start tracking their habits that are good for the environment,
                    as well as getting motivation to start making new habits.
                    The idea is to make the user aware of their impact on the planet
                    according to Goal 12 – responsible consumption and production – of the
                    UN’s sustainability goals.
                </p>
                <h3>How to use the app</h3>
                <p>
                    <ul>
                        <li>Upon starting the application, choose your user – or make a new one if
                            you do not have one yet.</li>
                        <li>On the Home page, you can find the daily habits you are currently
                            tracking.</li>
                        <li> If you wish to add other habits to your Home page, simply navigate to
                            the All Habits page via the menu. Here, you can add the habits of your
                            choice through the favorites’ icon.</li>
                        <li>When you have the habits you want on your Home page, you can start tracking your daily habits.</li>
                        <li>The amount of sustainable actions you do will be visible in the
                            Statistics page. Here, you can see when you have done more or less of
                            your sustainable actions.</li>
                        <li>To change a user, navigate to the profile image at the top right and
                            press “Change user”.</li>
                    </ul>
                </p>

                <h4>Good luck!</h4>
                <p>And please let us know if you need any help.</p>

                </div>
        )
    }

export default AboutUs;