import CategoryContainer from "../components/CategoryContainer";
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";


function CategoryPage(props) {
    return (
        <div className="grid grid-cols-10">
            <NavDesktop />
            <NavMobile />
            <CategoryContainer />

        </div>
    );
}

export default CategoryPage;