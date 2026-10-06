import Matriculas from "@/components/Matriculas";
import RequisitosMatricula from "@/components/RequisitosMatricula";
import Uniformes from "@/components/Uniformes";
import ScrollToTop from "@/components/ScrollToTop";

export default function MatriculasPage() {
  return (
    <>
      <ScrollToTop />
      <Matriculas />
      <RequisitosMatricula />
      <Uniformes />
    </>
  );
}
