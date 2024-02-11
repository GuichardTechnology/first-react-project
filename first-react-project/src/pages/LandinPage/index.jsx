
import { BannerSection } from "../../components/BannerSection"
import { CategoriesSection } from "../../components/CategoriesSection"
import { ProductsSection } from "../../components/ProductsSection"
import { FormSection } from "../../components/FormSection"
import { DefaultTemplate } from "../../components/DefaultTemplate"



export const LandiPage = () => {
    return (
        <>


            <DefaultTemplate>
                <BannerSection />
                <CategoriesSection />
                <ProductsSection />
                <FormSection />
            </DefaultTemplate>



        </>
    )
}