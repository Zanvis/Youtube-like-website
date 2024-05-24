import AdministatorSidebar from "./AdministratorSidebar";

function AdministratorPanel(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <AdministatorSidebar/>
                </aside>
                <section className="col-md-9">
                    Panel Admina
                </section>
            </div>
        </div>
    );
}
export default AdministratorPanel;