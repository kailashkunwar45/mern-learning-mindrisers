
export async function GET(request) {

  // console.log(await request.json());

  //console.log(request.nextUrl.searchParams.get('x'));

  return Response.json({
    posts: [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ],
  }, { status: 200 });
}