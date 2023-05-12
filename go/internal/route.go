package internal

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func entriesRoutes(rg *gin.RouterGroup) {
	users := rg.Group("/entries")

	users.POST("/debit", func(c *gin.Context) {
		c.JSON(http.StatusOK, "debit")
	})

	users.POST("/credit", func(c *gin.Context) {
		c.JSON(http.StatusOK, "credit")
	})

	users.GET("/balance", func(c *gin.Context) {
		fmt.Println("balance accessed")
		c.JSON(http.StatusOK, "balance")
	})
	
}