import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Paper,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { colors } from "../theme/colors";
import { WHATSAPP } from "../utils/constants";
import { SectionTitle, GradientButton } from "./common";

const perguntas = [
  {
    pergunta: "Aceita planos de saúde?",
    resposta:
      "Não atendo por convênios ou planos de saúde. Meus atendimentos, acompanhamentos e procedimentos são particulares, permitindo que eu ofereça uma experiência personalizada e exclusiva, garantindo atenção plena e resultados alinhados às suas necessidades e expectativas. Caso deseje mais informações, ficarei feliz em conversar sobre como podemos transformar sua saúde e qualidade de vida.",
  },
  {
    pergunta: "Como funciona a consulta?",
    resposta:
      "Reservo exatamente uma hora da minha agenda para cada paciente e, a depender da demanda de cada um, esse tempo pode ser um pouco menor ou um tanto maior. Ninguém é atendido às pressas ou sem a devida atenção. Se indicados procedimentos, como implante de testosterona e preenchimento peniano com ácido hialurônico, podemos realizar já ao final da consulta.",
  },
  {
    pergunta: "Qual a diferença entre Urologista e Andrologista?",
    resposta:
      "O Urologista é o médico que trata condições relacionadas ao sistema urinário em homens e mulheres. Já o Andrologista é o especialista com atuação exclusiva na saúde masculina, focado especialmente em questões hormonais, disfunções sexuais, fertilidade e estética genital masculina.",
  },
  {
    pergunta: "Quando devo procurar um Andrologista?",
    resposta:
      "Sempre que perceber alterações relacionadas à saúde sexual, hormonal ou reprodutiva. Sinais como queda na libido, dificuldades de ereção, ejaculação precoce, cansaço frequente, alterações no humor ou na disposição física, além de preocupações estéticas relacionadas à região genital, são motivos claros para uma consulta especializada.",
  },
  {
    pergunta: "Como funciona a reposição de testosterona?",
    resposta:
      "Primeiro ponto é saber se você precisa: testosterona baixa e sintomas relacionados. Se indicada, pode ser feita por géis tópicos, aplicações intramusculares ou implantes subcutâneos. A via é escolhida por você, após detalhada explicação sobre cada uma delas.",
  },
  {
    pergunta: "Como funciona o chip hormonal?",
    resposta:
      "Os chips hormonais não existem. Na verdade, é um modo errado de se referir aos implantes subcutâneos, que são pequenas cápsulas de liberação lenta de substâncias (no caso, a testosterona), inseridas sob a pele, geralmente na região glútea, por meio de um procedimento simples e rápido, no consultório mesmo e sob anestesia local.",
  },
  {
    pergunta: "Testosterona causa câncer de próstata?",
    resposta:
      "Não. Já temos evidências suficientes para refutar essa associação.",
  },
  {
    pergunta: "Existe mesmo procedimento para aumento peniano?",
    resposta:
      "Sim, o preenchimento com ácido hialurônico aumenta o calibre peniano e é um método minimamente invasivo, realizado no consultório mesmo, com anestesia local, e permite resultados imediatos, discretos e naturais, com rápida recuperação.",
  },
  {
    pergunta: "Qual o preço do procedimento para aumento peniano?",
    resposta:
      "O valor do procedimento depende do comprimento da haste, grau de retração, elasticidade da pele, calibre inicial e do quanto o paciente deseja aumentar. Isso somente pode ser analisado durante uma avaliação física. Agendando uma consulta, explico o procedimento em detalhes, realizo sua avaliação, apresento resultados e informo o orçamento.",
  },
  {
    pergunta: "A vasectomia altera a função sexual ou os hormônios?",
    resposta:
      "Não. A vasectomia não interfere na produção da testosterona, no desejo sexual, na ereção ou na capacidade de sentir prazer. Ela apenas interrompe a passagem dos espermatozoides, impedindo a fecundação. Os testículos continuam produzindo testosterona normalmente e todas as funções sexuais permanecem preservadas.",
  },
  {
    pergunta: "A vasectomia é segura? Dá para reverter?",
    resposta:
      "A vasectomia é extremamente segura e considerada um método contraceptivo definitivo e altamente eficaz (mais de 99%). Embora seja tecnicamente possível reverter através de microcirurgia, o procedimento de reversão é mais complexo e as taxas de sucesso não são tão altas quanto as da vasectomia.",
  },
  {
    pergunta:
      "Qual a diferença entre cirurgia de fimose, circuncisão e postectomia?",
    resposta:
      "Na prática, são apenas nomes diferentes para o mesmo procedimento: a remoção cirúrgica do prepúcio. A diferença está apenas na nomenclatura utilizada conforme a finalidade clínica ou cultural.",
  },
  {
    pergunta: "Medicações para ereção causam infarto?",
    resposta:
      "O risco de infarto é extremamente baixo em pacientes sem doenças cardiovasculares e não é causado pela medicação em si. O perigo está no uso indiscriminado, principalmente por pacientes que utilizam nitratos ou possuem doenças cardíacas não diagnosticadas.",
  },
  {
    pergunta: "Qual a função da ultrassonografia Doppler peniana?",
    resposta:
      "A Ultrassonografia Doppler peniana é um exame utilizado na investigação da disfunção erétil e avalia, de forma precisa, a circulação sanguínea no pênis durante o estímulo medicamentoso à ereção, permitindo identificar causas vasculares, como déficit de fluxo arterial ou falha no mecanismo de retenção venosa. É um exame seguro, indolor e realizado em consultório.",
  },
];

export default function FAQSection() {
  return (
    <Box
      id="faq"
      sx={{
        py: 12,
        background: colors.background,
      }}
    >
      <Container maxWidth="md">
        <SectionTitle primary="Perguntas" secondary="frequentes" />

        <Typography
          align="center"
          sx={{
            color: colors.textLight,
            maxWidth: 650,
            mx: "auto",
            mb: 6,
            lineHeight: 1.8,
          }}
        >
          Esclareça suas principais dúvidas sobre tratamentos e procedimentos.
        </Typography>

        {perguntas.map((item) => (
          <Accordion
            key={item.pergunta}
            disableGutters
            elevation={0}
            sx={{
              mb: 2,
              borderRadius: "18px !important",
              overflow: "hidden",
              border: `1px solid ${colors.border}`,
              background: colors.white,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: colors.primary,
                  }}
                />
              }
              sx={{
                px: 3,
                py: 1,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: colors.text,
                }}
              >
                {item.pergunta}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                px: 3,
                pb: 3,
              }}
            >
              <Typography
                sx={{
                  color: colors.textLight,
                  lineHeight: 2,
                }}
              >
                {item.resposta}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Paper
          elevation={0}
          sx={{
            mt: 8,
            p: 6,
            textAlign: "center",
            borderRadius: 6,
            border: `1px solid ${colors.border}`,
            background: colors.white,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: colors.text,
              fontWeight: 700,
              mb: 2,
            }}
          >
            Ainda tem dúvidas?
          </Typography>

          <Typography
            sx={{
              color: colors.textLight,
              mb: 4,
            }}
          >
            Entre em contato e esclareça todas as suas questões em uma consulta
            personalizada.
          </Typography>

          <GradientButton component="a" href={WHATSAPP} target="_blank">
            Falar comigo!
          </GradientButton>
        </Paper>
      </Container>
    </Box>
  );
}
