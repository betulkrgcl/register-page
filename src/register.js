import {MdOutlineAccountCircle} from 'react-icons/md'

export default function Register () {
    return(
        <div>
            <section className="login" >
                <div className="content" >
                    <div className="header" >
                        <div className="logo" >
                            <MdOutlineAccountCircle className='logo-account' />
                            <h3 className="heading" > Kayıt Ol</h3>

                        </div>

                    </div>
                    <form className="login-info" >
                        <div className="user-info" >
                            <input className="login-input" type="text" required/> 
                            <span className="user" > İsim & Soyisim</span>

                        </div>
                        <div className="user-info">
                           <input className="login-input" type="email" required/>
                           <span className="user">E-mail</span>
                     </div>
                     <div className="user-info">
                           <input className="login-input" type="password" required/>
                           <span className="user">Şifre</span>
                     </div>
                     <div className="button">
                        <button className="login-btn" type="button">Kayıt Ol</button>
                     </div>
                        
                    </form>

                </div>

















            </section>






        </div>

    );
}