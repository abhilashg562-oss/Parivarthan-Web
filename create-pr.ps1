$token = ""
$headers = @{
    "Authorization" = "token $token"
    "Content-Type" = "application/json"
}

$body = @{
    title = "Enable desktop mode by expanding mobile container width"
    body = "This PR adds desktop mode support by expanding the mobile container width from 420px to full width on screens 1024px and larger."
    head = "main"
    base = "main"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://api.github.com/repos/abhilashg562-oss/Parivarthan-Web/pulls" -Method POST -Headers $headers -Body $body
Write-Output $response.html_url
</create_file>
