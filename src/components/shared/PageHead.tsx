import { Helmet } from "react-helmet";

interface PageHeadProps {
  title: string;
  description?: string;
}

export default function PageHead({
  title,
  description = "A page for deep thoughts",
}: PageHeadProps) {
  return (
    <Helmet>
      <title>Meditations{title && ` - ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
