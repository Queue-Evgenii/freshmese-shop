<template>
  <footer class="footer">
    <div class="_container _flex _f-dir-col _gap-48">
      <TopFooter :menu="topFooterMenu" />
      <ContentFooter :menu="tagsMenu" />
      <CopyFooter />
    </div>
  </footer>
</template>

<script>
import TopFooter from "@/components/footer/TopFooter.vue";
import ContentFooter from "@/components/footer/ContentFooter.vue";
import CopyFooter from "@/components/footer/CopyFooter.vue";
export default {
  name: "FooterComponent",
  components: {
    TopFooter,
    ContentFooter,
    CopyFooter,
  },
  data() {
    return {
      topFooterMenu: [
        {
          id: 0,
          name: "Get in touch",
          items: [
            {
              id: 0,
              name: "About Us",
              url: "/about",
            },
            {
              id: 1,
              name: "Careers",
              url: "/careers",
            },
            {
              id: 2,
              name: "Press Releases",
              url: "/releases",
            },
            {
              id: 3,
              name: "Blog",
              url: "/blog",
            },
          ],
        },
        {
          id: 1,
          name: "Connections",
          items: [
            {
              id: 0,
              name: "Facebook",
              url: "",
            },
            {
              id: 1,
              name: "Twitter",
              url: "",
            },
            {
              id: 2,
              name: "Instagram",
              url: "",
            },
            {
              id: 3,
              name: "Youtube",
              url: "",
            },
            {
              id: 4,
              name: "LinkedIn",
              url: "",
            },
          ],
        },
        {
          id: 2,
          name: "Earnings",
          items: [
            {
              id: 0,
              name: "Become an Affiliate",
              url: "/become-affiliate",
            },
            {
              id: 1,
              name: "Advertise your product",
              url: "/ads-your-prodict",
            },
            {
              id: 2,
              name: "Sell on Market",
              url: "/sell",
            },
          ],
        },
        {
          id: 3,
          name: "Account",
          items: [
            {
              id: 0,
              name: "Your account",
              url: "/account",
            },
            {
              id: 1,
              name: "Returns Centre",
              url: "/returns",
            },
            {
              id: 2,
              name: "100 % purchase protection",
              url: "/protection",
            },
            {
              id: 3,
              name: "Chat with us",
              url: "/chat",
            },
            {
              id: 4,
              name: "Help",
              url: "/help",
            },
          ],
        },
      ],
      tagsMenu: [
        {
          id: 0,
          name: "Beans",
          url: "/beans",
        },
        {
          id: 1,
          name: "Carrots",
          url: "/carrots",
        },
        {
          id: 2,
          name: "Apples",
          url: "/apples",
        },
        {
          id: 3,
          name: "Garlic",
          url: "/garlic",
        },
        {
          id: 4,
          name: "Mushrooms",
          url: "/mushrooms",
        },
        {
          id: 5,
          name: "Tomatoes",
          url: "/tomatoes",
        },
        {
          id: 6,
          name: "Chilli peppers",
          url: "/chilli-peppers",
        },
        {
          id: 7,
          name: "Broccoli",
          url: "/broccoli",
        },
        {
          id: 8,
          name: "Watermelons",
          url: "/watermelons",
        },
        {
          id: 9,
          name: "Oranges",
          url: "/oranges",
        },
        {
          id: 10,
          name: "Bananas",
          url: "/bananas",
        },
        {
          id: 11,
          name: "Grapes",
          url: "/grapes",
        },
        {
          id: 12,
          name: "Cherries",
          url: "/cherries",
        },
        {
          id: 13,
          name: "Meat",
          url: "/meat",
        },
        {
          id: 14,
          name: "Fish",
          url: "/fish",
        },
        {
          id: 15,
          name: "Lemons",
          url: "/lemons",
        },
      ],
    };
  },
};
</script>

<style lang="stylus">
.footer{
	padding: 64px 0;
}
</style>
