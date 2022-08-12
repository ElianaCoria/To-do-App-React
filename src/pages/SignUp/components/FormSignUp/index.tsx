const FormSignUp = () => {
    return(
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                </div>

                <div className="form-group">
                    <label htmlFor="">E-mail</label>
                    <input type="email" name="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="pass" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Repetir contraseña</label>
                    <input type="password" name="pass" />
                </div>

                <button type="submit">Registrarme</button>
                
            </form>
    )
}

export { FormSignUp };