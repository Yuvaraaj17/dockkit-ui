import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { base_image, packages } = body;

  const response = await fetch(
    "https://api.github.com/repos/Yuvaraaj17/dockkit-backend/actions/workflows/build-image.yml/dispatches",
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        // Authorization: `token ${process.env.GITHUB_PAT}`,
      },
      body: JSON.stringify({
        ref: "main",
        inputs: {
          base_image,
          packages: packages.join(","),
        },
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json();
    return NextResponse.json(
      { success: false, error: err },
      { status: response.status }
    );
  }

  return NextResponse.json({ success: true });
}
