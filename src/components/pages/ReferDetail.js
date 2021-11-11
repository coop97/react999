import React from "react";
import Contents from '../layouts/Contents';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import {Link} from 'react-router-dom';

// function ReferDetail(props) {
//     console.log(props)
//     return <span></span>
// }

class ReferDetail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/reference')
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            return (
                <div>
                    <Header />
                    <Contents>
                        <section className="referCont"></section>
                            <div className="container">
                                <div className="refer__detail pt200">
                                    <h3>{location.state.title}</h3>
                                    <p>{location.state.desc2}</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>요소</th>
                                                <td>{location.state.element}</td>
                                            </tr>
                                            <tr>
                                                <th>닫는 태그</th>
                                                <td>{location.state.tag}</td>
                                            </tr>
                                            <tr>
                                                <th>버전</th>
                                                <td>{location.state.version}</td>
                                            </tr>
                                            <tr>
                                                <th>시각적 표현</th>
                                                <td>{location.state.view}</td>
                                            </tr>
                                            <tr>
                                                <th>사용성</th>
                                                <td>{location.state.use}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h4>정의(Definition)</h4>
                                    <ul>
                                        {location.state.definition.map((defer) => (
                                            <li key={defer.toString()}>{defer}</li>
                                        ))}
                                    </ul>
                                    <Link className="list-btn" to="/reference">목록보기</Link>
                                </div>
                            </div>
                    </Contents>
                    <Footer />
                </div>
            )
            // <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default ReferDetail;