import { useNavigate } from "react-router-dom";

//COMPONENTS
import {
  CardComponent,
  Header,
  AvatarsList,
  CustomTable,
  CustomChart,
  StyledH2,
  StyledH3,
  StyledSpan,
} from "@/components";
import { Container, Grid } from "@mui/material";

//UTILS
import { currencyConverter, highlightTextConverter } from "@/utils";

//HOOKS
import { useGet } from "@/hooks";

//TYPES
import {
  HighlightsDataProps,
  StarsDataProps,
  NewsDataProps,
  CustomChartProps,
} from "@/types";

export function Home() {

  const navigate = useNavigate()

  const {
    data: highlightsData,
    loading: highlightsLoading,
    error: highlightsError,
  } = useGet<HighlightsDataProps[]>("sales/highlights");

  const {
    data: salesMonthData,
    loading: salesMonthLoading,
    error: salesMonthError,
  } = useGet<CustomChartProps>("sales/month");

  const {
    data: salesStarsData,
    loading: salesStarsLoading,
    error: salesStarsError,
  } = useGet<StarsDataProps[]>("sales/stars");

  const {
    data: newsData,
    loading: newsLoading,
    error: newsError,
  } = useGet<NewsDataProps[]>("news");

  const {
    data: salesYearData,
    loading: salesYearLoading,
    error: salesYearError,
  } = useGet<CustomChartProps>("sales/year");

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {!highlightsError && (
            <>
              <Grid item xs={12} sm={4}>
                <CardComponent
                  id="total-sales"
                  className={
                    highlightsLoading
                      ? "skeleton-loading skeleton-loading-mh-1 pointer"
                      : "pointer"
                  }
                  onClick={() => navigate("/leads")}
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">
                        Total de vendas no mês
                      </StyledH2>
                      <StyledH3 size={40} lineheight={40} className="mb-1">
                        {currencyConverter(highlightsData[0]?.value)}
                      </StyledH3>
                      <StyledSpan>{highlightsData[0]?.subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>
              <Grid item xs={12} sm={4}>
                <CardComponent
                  id="month-goals"
                  className={
                    highlightsData
                      ? `${highlightsData[1].subtitle} pointer`
                      : "skeleton-loading skeleton-loading-mh-1 pointer"
                  }
                  onClick={() => navigate("/leads")}
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1" color="white">
                        Meta do mês
                      </StyledH2>
                      <StyledH3
                        size={40}
                        lineheight={40}
                        className="mb-1"
                        color="white"
                      >
                        {currencyConverter(highlightsData[1]?.value)}
                      </StyledH3>
                      <StyledSpan color="white">
                        {highlightTextConverter(highlightsData[1]?.subtitle)}
                      </StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>
              <Grid item xs={12} sm={4}>
                <CardComponent
                  id="total-leads"
                  className={
                    highlightsLoading
                      ? "skeleton-loading skeleton-loading-mh-1 pointer"
                      : "pointer"
                  }
                  onClick={() => navigate("/leads")}
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">Leads contactados</StyledH2>
                      <StyledH3 size={40} lineheight={40} className="mb-1">
                        {highlightsData[2]?.value}
                      </StyledH3>
                      <StyledSpan>{highlightsData[2]?.subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>
            </>
          )}

          <Grid item xs={12} sm={7}>
            {!salesMonthError && (
              <CardComponent
                id="month-sales-chart"
                className={
                  salesMonthLoading
                    ? "skeleton-loading skeleton-loading-mh-2"
                    : ""
                }
              >
                {!salesMonthLoading && salesMonthData && (
                  <>
                    <StyledH2 className="mb-1">Valor de vendas no mês</StyledH2>
                    <CustomChart
                      labels={salesMonthData.labels.map((label) => label)}
                      data={salesMonthData.data.map((data) => data)}
                      type={salesMonthData.type}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} sm={5}>
            {!salesStarsError && (
              <CardComponent
                id="sales-stars"
                className={
                  salesStarsLoading
                    ? "skeleton-loading skeleton-loading-mh-2"
                    : ""
                }
              >
                {!salesStarsLoading && salesStarsData && (
                  <>
                    <StyledH2 className="mb-1">
                      Maiores vendeores do mês
                    </StyledH2>
                    <AvatarsList
                      listData={salesStarsData.map((star) => ({
                        name: star.name,
                        subtitle: currencyConverter(star.value),
                        avatar: "/user.svg",
                      }))}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} sm={5}>
            {!newsError && (
              <CardComponent
                id="news"
                className={
                  newsLoading ? "skeleton-loading skeleton-loading-mh-2" : ""
                }
              >
                {!newsLoading && newsData && (
                  <>
                    <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
                    <CustomTable
                      headers={["Título", "Horário"]}
                      rows={newsData.map((news) => [
                        <a
                          className="ellipsis ellipsis-sm"
                          href={news.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {news.title}
                        </a>,
                        <a href={news.link} target="_blank" rel="noreferrer">
                          {news.date}
                        </a>,
                      ])}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} sm={7}>
            {!salesYearError && (
              <CardComponent
                id="year-sales-chart"
                className={
                  salesYearLoading
                    ? "skeleton-loading skeleton-loading-mh-2"
                    : ""
                }
              >
                {!salesYearLoading && salesYearData && (
                  <>
                    <StyledH2 className="mb-1">
                      Valor de vendas por mês
                    </StyledH2>
                    <CustomChart
                      labels={salesYearData.labels.map((label) => label)}
                      data={salesYearData.data.map((data) => data)}
                      type={salesYearData.type}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
