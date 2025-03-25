import styles from "./Company.module.css"

function Company(){
    return(
        <>
        <section className={styles["about-section"]}>
            <h1>Sobre a Costs</h1>
            <div>
                <h3>Nossa Missão</h3>
                <p>Na Costs, acreditamos que o sucesso de um projeto está na organização e no controle. Nossa missão é fornecer uma plataforma intuitiva e poderosa que simplifique o gerenciamento de projetos, permitindo que equipes alcancem seus objetivos com eficiência e dentro do orçamento.</p>
            </div>
            <div>
                <h3>Quem Somos</h3>
                <p>Somos uma equipe de profissionais apaixonados por tecnologia e gestão de projetos. Desenvolvemos o Costs com o objetivo de oferecer uma solução completa para empresas e profissionais que buscam otimizar seus processos e maximizar seus resultados.</p>
            </div>
            <div>
                <h3>O Que Oferecemos</h3>
                <p>Costs é um sistema de gerenciamento de projetos completo e personalizável, que permite:</p>
                <ul>
                    <li>Criação e organização de projetos: Defina o escopo, categorias e orçamentos de seus projetos de forma clara e organizada.</li>
                    <li>Acompanhamento de orçamento: Monitore os gastos do seu projeto em tempo real, evitando surpresas e garantindo que tudo fique dentro do planejado.</li>
                    <li>Colaboração e comunicação: Facilite a comunicação entre os membros da equipe, centralizando informações e documentos em um único lugar.</li>
                    <li>Relatórios e análises: Gere relatórios detalhados sobre o progresso e o desempenho de seus projetos, auxiliando na tomada de decisões estratégicas.</li>
                </ul>
            </div>
            <div>
                <h3>Nossos valores</h3>
                <ul>
                    <li>Simplicidade: Acreditamos que um sistema de gerenciamento de projetos deve ser fácil de usar e intuitivo.</li>
                    <li>Eficiência: Nosso objetivo é fornecer uma plataforma que otimize seus processos e maximize seus resultados.</li>
                    <li>Transparência: Acreditamos na comunicação clara e aberta, garantindo que todos os membros da equipe estejam alinhados.</li>
                    <li>Inovação: Buscamos constantemente novas tecnologias e funcionalidades para aprimorar o Costs e atender às necessidades dos nossos clientes.</li>
                </ul>
            </div>
            <div>
                <h3>Junte-se a Nós</h3>
                <p>Se você busca uma solução completa e eficiente para gerenciar seus projetos, Costs é a escolha certa. Entre em contato conosco e descubra como podemos ajudar sua equipe a alcançar o sucesso.</p>
            </div>
        </section>
        </>
    )
}

export default Company;