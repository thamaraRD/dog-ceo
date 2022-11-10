import { footer } from "../assets/texts"

export const Footer = () => {
  return (
    <div className="fixed-bottom footer">
    <div className="row">
        <div className="col-md-12 p-0 mt-6">
            <p className=" bg-secondary text-light text-center p-0
            m-0">{footer.FOOTER_DESCRIPTION}</p>
        </div>
    </div>
</div>
  )
};
